import { toast } from "react-toastify";

//padrão de projeto Adapter
export const toastfyWrapper = {
  success: (msg:string) => toast.success(msg),
  error: (msg:string) => toast.error(msg),
  warn: (msg:string) => toast.warn(msg),
  warning: (msg:string) => toast.warning(msg),
  info: (msg:string) => toast.info(msg),
  dismiss: ()=> toast.dismiss(),
}