import { redirect } from "next/navigation";

/* /topaz was the combined page until 20 Oct; it now points at Topaz Image. */
export default function TopazPage() {
  redirect("/topaz-image");
}
