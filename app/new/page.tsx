import { ArrowLeft } from "lucide-react";

export default function NewOperationPage() {
    return (
        <div className="container mx-auto pt-10">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">New Operation</h1>
                <a href="/" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"><ArrowLeft /> Back</a>
            </div>
        </div>
    )
}