import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function downloadPDF() {
    const content = document.getElementById("pdfdownload");
    
    html2canvas(content, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        // Calculate width and height for the PDF page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, "PNG", 5, 5, pdfWidth-8, pdfHeight);
        pdf.save("Dashboard.pdf");
    });
}
