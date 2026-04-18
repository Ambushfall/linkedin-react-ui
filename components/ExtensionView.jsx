export default function ExtensionView({ extension }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
      {/* Icon */}
      <div className="flex-shrink-0 w-16">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">
            {extension.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-0.5">
        <div className="flex gap-2 h-6">
          <span className="text-xs font-semibold text-gray-600 w-12">NAME</span>
          <h2 className="text-sm font-semibold text-gray-900">
            {extension.name}
          </h2>
        </div>
        <div className="flex gap-2 h-6">
          <span className="text-xs font-semibold text-gray-600 w-12">EXT ID</span>
          <p className="text-xs text-red-600 font-mono truncate">
            {extension.id}
          </p>
        </div>
        <div className="flex gap-2 h-6">
          <span className="text-xs font-semibold text-gray-600 w-12">FILE</span>
          <p className="text-xs text-yellow-600 font-mono truncate">
            {extension.resource}
          </p>
        </div>
      </div>
    </div>
  );
}
