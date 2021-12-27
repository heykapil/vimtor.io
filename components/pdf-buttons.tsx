import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import { DownloadIcon } from "@heroicons/react/solid";
import { ComponentProps } from "react";
import Button from "./button";
import SectionButtons from "./section/section-buttons";

interface PdfButtonsProps extends Omit<ComponentProps<typeof PDFDownloadLink>, "children" | "style"> {}

function PdfButtons({ document, fileName, className }: PdfButtonsProps) {
    const [{ url }] = usePDF({ document });

    return (
        <SectionButtons>
            <Button download={fileName} href={url || ""} variant="primary" size="medium" className="w-full sm:w-auto">
                <DownloadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Download
            </Button>
            <Button variant="secondary" size="medium" href={url || ""} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                View PDF
            </Button>
        </SectionButtons>
    );
}

export default PdfButtons;
