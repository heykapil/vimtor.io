import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import { DownloadIcon } from "@heroicons/react/solid";
import { ComponentProps } from "react";
import { classNames } from "../utils/style";

interface PdfButtonsProps extends Omit<ComponentProps<typeof PDFDownloadLink>, "children" | "style"> {}

function PdfButtons({ document, fileName, className }: PdfButtonsProps) {
    const [{ url }] = usePDF({ document });

    return (
        <div className={classNames("sm:flex max-w-[50vh] px-4 sm:max-w-none sm:gap-3 mx-auto space-y-3 sm:space-y-0 justify-center items-center", className)}>
            <a
                download={fileName}
                href={url || ""}
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-2 border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
                <DownloadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Download
            </a>
            <a
                href={url || ""}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-2 border-gray-800 shadow-sm text-lg font-medium rounded-full text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
                View PDF
            </a>
        </div>
    );
}

export default PdfButtons;
