import Navbar from './navbar'
import Courses from "./courses"
import Footter from '../footter'
export default function page() {
  return (
    <div className="bg-[url('https://t3.ftcdn.net/jpg/04/09/03/58/360_F_409035824_ufvz5fwVxad2kMzlJOaQ0MadLP4PPM19.jpg')] bg-no-repeat bg-cover bg-center">
      <Navbar/>
      <Courses/>
      <Footter/>
    </div>
  )
}
