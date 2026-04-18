import ExtensionView from '@/components/ExtensionView';

export default function ExtensionsList({ extensions }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Extensions</h1>
      
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <div className="space-y-2 text-sm font-mono">
          <div><span className="font-semibold text-gray-700">NAME</span> <span className="text-gray-600">Extension name</span></div>
          <div><span className="font-semibold text-gray-700">EXT ID</span> <span className="text-red-600">Extension identifier</span></div>
          <div><span className="font-semibold text-gray-700">FILE</span> <span className="text-yellow-600">Web accessible resource path</span></div>
        </div>
      </div>
      
      <div className="space-y-4">
        {extensions.map((extension) => (
          <ExtensionView key={extension.id} extension={extension} />
        ))}
      </div>
    </div>
  );
}
