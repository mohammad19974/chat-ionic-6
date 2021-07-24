export interface ItemChatProps {
  name: string;
  subTitle?: string;
  imageProfile: string;
  button?: boolean | undefined;
  detail?: boolean | undefined;
  lines?: "full" | "inset" | "none" | undefined;
  state?: "read" | "unread" | "insend" | "send" | string;
}
