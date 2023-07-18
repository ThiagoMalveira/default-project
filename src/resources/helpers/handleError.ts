import HandleNotification from "@resources/helpers/handleNotification";
import { HttpCodes } from "@resources/types/httpCode";

const LoadingActions = {
  stopLoading: () => null,
};

const store = {
  dispatch: (callback: any) => callback(),
};

export const HandleError = (err: any): void => {
  if (!err || !err.response || !err.response.status) {
    HandleNotification("ERROR", "Erro de conexão...");

    store.dispatch(LoadingActions.stopLoading());
    return;
  }

  if (err.response.status === HttpCodes.APPLICATION_EXCEPTION) {
    HandleNotification("ERROR", err.response.data.error.message);

    store.dispatch(LoadingActions.stopLoading());
    return;
  }

  if (err.response.status === HttpCodes.NOT_FOUND) {
    HandleNotification("ERROR", "Servidor indisponível...!");
    return;
  }

  if (err.response.status === HttpCodes.INTERNAL_SERVER_ERROR) {
    HandleNotification("ERROR", "Servidor indisponível...");

    store.dispatch(LoadingActions.stopLoading());
    return;
  }

  if (err.response.status === HttpCodes.BAD_REQUEST) {
    return err.response.data.content;
  }

  return err.response.data.content;
};
