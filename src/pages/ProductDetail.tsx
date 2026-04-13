// pages/ProductDetail.tsx
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data'


export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) return
    (<div className="min-h-screen">
        <p>Product not found.</p>
    </div>)

    return (
        <div className="min-h-screen mt-4">
            <div className="flex gap-8 px-8">
                {/* Image */}
                <div className="w-1/2">
                    <div className='text-2xl font-bold my-2'>{product.name}</div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain rounded-md"
                    />
                </div>

                {/* Specs table */}
                <div className="w-1/2">
                    <div className='text-2xl text-gray-800 fond-bold mb-4'>Specifications</div>
                    <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                            {product.specs.map((spec) => (
                                <tr key={spec.label} className="border border-gray-300">
                                    <td className="px-4 py-3 text-lg font-medium text-gray-700 w-1/2 border border-gray-300">
                                        {spec.label}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 w-1/2">
                                        {spec.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='mt-8 text-xl underline bold'>
                        <a
                            href={product.document}
                            // download
                            className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-blue-600 underline hover:text-blue-800"
                        >
                            Download Datasheet
                        </a>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-sm font-bold text-gray-800 uppercase mb-3">
                            Key Features
                        </h2>
                        <ul className="space-y-2">
                            {product.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="mt-1 size-1.5 rounded-full bg-blue-800 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}