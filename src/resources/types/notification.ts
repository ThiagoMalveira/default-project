export interface INotificationType {
  ERROR: string;
  SUCCESS: string;
  INFO: string;
  WARNING: string;
  DEFAULT: string;
}

export const typesNotification: INotificationType = {
  ERROR: "error",
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  DEFAULT: "default",
};
