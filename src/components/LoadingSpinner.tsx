const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#4DA3FF] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-b-[#0A1F44] rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
