import type { Metadata } from "next";
import { CvLanguageSwitcher } from "@/share/component/control/CvLanguageSwitcher";
import { cvProfiles } from "@/share/model/cvProfile";

export const metadata: Metadata = {
  title: "CV - Vũ Bá Công | Ugent",
  description:
    "Trang CV song ngữ mô tả kinh nghiệm, kỹ năng và dự án của Vũ Bá Công"
};

export default function MyInfoPage() {
  return <CvLanguageSwitcher profiles={cvProfiles} />;
}
