import { useState, useRef, ChangeEvent, DragEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, Image as ImageIcon, X, AlertCircle, ArrowRight } from "lucide-react"
import Papa from "papaparse"
import { cn } from "@/lib/utils"

export default function UploadPage() {
    const [csvFile, setCsvFile] = useState<File | null>(null)
    const [imageFiles, setImageFiles] = useState<File[]>([])
    const [isDraggingCsv, setIsDraggingCsv] = useState(false)
    const [isDraggingImage, setIsDraggingImage] = useState(false)
    const [parseError, setParseError] = useState<string | null>(null)

    const [parsedData, setParsedData] = useState<any[]>([])
    const [headers, setHeaders] = useState<string[]>([])

    const csvInputRef = useRef<HTMLInputElement>(null)
    const imageInputRef = useRef<HTMLInputElement>(null)

    // CSV Handlers
    const handleCsvDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingCsv(true)
    }

    const handleCsvDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingCsv(false)
    }

    const handleCsvDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingCsv(false)
        const file = e.dataTransfer.files?.[0]
        if (file && file.type === "text/csv") {
            processCsvFile(file)
        } else {
            setParseError("Please upload a valid CSV file.")
        }
    }

    const handleCsvInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            processCsvFile(file)
        }
    }

    const processCsvFile = (file: File) => {
        setParseError(null)
        setCsvFile(file)

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const data = results.data as any[]
                if (data.length > 0) {
                    setHeaders(Object.keys(data[0]))
                    setParsedData(data.slice(0, 5))
                }
            },
            error: (error: Error) => {
                setParseError(`Error parsing CSV: ${error.message}`)
                setCsvFile(null)
            }
        })
    }

    // Image Handlers
    const handleImageDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingImage(true)
    }

    const handleImageDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingImage(false)
    }

    const handleImageDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingImage(false)
        const files = Array.from(e.dataTransfer.files || [])
        const validImages = files.filter(file => file.type.startsWith("image/"))
        if (validImages.length > 0) {
            setImageFiles(prev => [...prev, ...validImages])
        }
    }

    const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        if (files.length > 0) {
            setImageFiles(prev => [...prev, ...files])
        }
    }

    const removeImage = (index: number) => {
        setImageFiles(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="container mx-auto py-10 max-w-5xl">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Upload Portfolio
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
                Import your data to get started with the analysis.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
                {/* CSV Upload Section */}
                <div className="space-y-4">
                    <Card
                        className={cn(
                            "h-80 flex flex-col items-center justify-center border-dashed border-2 cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-muted/50",
                            isDraggingCsv ? "border-primary bg-primary/5 scale-[1.02]" : "border-muted-foreground/25",
                            csvFile ? "border-solid border-green-500/50 bg-green-500/5" : ""
                        )}
                        onDragOver={handleCsvDragOver}
                        onDragLeave={handleCsvDragLeave}
                        onDrop={handleCsvDrop}
                        onClick={() => csvInputRef.current?.click()}
                    >
                        <CardHeader className="pb-2">
                            <div className={cn("p-4 rounded-full mb-2 mx-auto transition-colors", csvFile ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary")}>
                                <FileText className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-xl text-center">Upload CSV</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center px-8">
                            {csvFile ? (
                                <div className="space-y-2">
                                    <p className="font-medium text-foreground">{csvFile.name}</p>
                                    <p className="text-xs text-muted-foreground">{(csvFile.size / 1024).toFixed(2)} KB</p>
                                    <p className="text-sm text-green-600 font-medium">Ready for analysis</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <p className="text-muted-foreground">Drag and drop your portfolio CSV here</p>
                                    <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-semibold">OR CLICK TO BROWSE</p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept=".csv"
                                className="hidden"
                                ref={csvInputRef}
                                onChange={handleCsvInputChange}
                            />
                        </CardContent>
                    </Card>
                    {parseError && (
                        <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                            <AlertCircle className="w-4 h-4" />
                            <p>{parseError}</p>
                        </div>
                    )}
                </div>

                {/* Image Upload Section */}
                <div className="space-y-4">
                    <Card
                        className={cn(
                            "h-80 flex flex-col items-center justify-center border-dashed border-2 cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-muted/50",
                            isDraggingImage ? "border-primary bg-primary/5 scale-[1.02]" : "border-muted-foreground/25",
                            imageFiles.length > 0 ? "border-solid border-blue-500/50 bg-blue-500/5" : ""
                        )}
                        onDragOver={handleImageDragOver}
                        onDragLeave={handleImageDragLeave}
                        onDrop={handleImageDrop}
                        onClick={() => imageInputRef.current?.click()}
                    >
                        <CardHeader className="pb-2">
                            <div className={cn("p-4 rounded-full mb-2 mx-auto transition-colors", imageFiles.length > 0 ? "bg-blue-100 text-blue-600" : "bg-primary/10 text-primary")}>
                                <ImageIcon className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-xl text-center">Upload Screenshots</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center px-8">
                            <div className="space-y-2">
                                <p className="text-muted-foreground">Upload screenshots from Groww/Kite</p>
                                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-semibold">OR CLICK TO BROWSE</p>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                ref={imageInputRef}
                                onChange={handleImageInputChange}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* CSV Data Preview */}
            {parsedData.length > 0 && (
                <div className="mt-8 animate-fade-in-up">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold tracking-tight">CSV Preview</h3>
                        <span className="text-sm text-muted-foreground">Showing first 5 rows</span>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted/50 text-muted-foreground uppercase text-xs font-semibold tracking-wider border-b">
                                    <tr>
                                        {headers.map((key) => (
                                            <th key={key} className="px-6 py-4">{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {parsedData.map((row, i) => (
                                        <tr key={i} className="hover:bg-muted/50 transition-colors">
                                            {headers.map((key) => (
                                                <td key={`${i}-${key}`} className="px-6 py-4 whitespace-nowrap">
                                                    {row[key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Preview List */}
            {imageFiles.length > 0 && (
                <div className="mt-8 animate-fade-in-up">
                    <h3 className="text-xl font-bold tracking-tight mb-4">Selected Images ({imageFiles.length})</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {imageFiles.map((file, index) => (
                            <div key={index} className="relative group rounded-xl overflow-hidden border bg-background shadow-sm aspect-video">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Preview ${index}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            removeImage(index)
                                        }}
                                        className="p-2 bg-destructive text-white rounded-full hover:bg-destructive/90 transition-transform hover:scale-110"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 text-xs truncate text-white bg-gradient-to-t from-black/80 to-transparent">
                                    {file.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Actions */}
            {(csvFile || imageFiles.length > 0) && (
                <div className="mt-12 flex justify-end animate-fade-in-up">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto text-lg px-8 h-12 shadow-lg shadow-primary/20"
                        onClick={() => {
                            const formData = new FormData()
                            if (csvFile) formData.append('csv', csvFile)
                            imageFiles.forEach(file => formData.append('screenshots', file))

                            // Todo: Call backend API
                            console.log("Sending to backend:", Object.fromEntries(formData))

                            // Simulate analysis delay then redirect
                            alert("Analysis starting... (Simulated)")
                            window.location.href = "/dashboard"
                        }}
                    >
                        Analyze Portfolio <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    )
}
