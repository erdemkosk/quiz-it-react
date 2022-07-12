import Quiz from 'components/Quiz'

export default function Main() {
    return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r">

<div className="relative ">
    <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-[600px] h-[600px] bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="m-8 relative space-y-4">
    <Quiz></Quiz>
    </div>
  </div>
  </div>
    )
}