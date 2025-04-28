import UserCard from "@/components/UserCard"

const Adminpage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/*Left*/}
      <div className="w-full lg:w-2/3">
      {/*UserCards*/}
        <div className="flex flex-wrap gap-4 justify-between">
          <UserCard type="Student"/>
          <UserCard type="Teacher"/>
          <UserCard type="Parent"/>
          <UserCard type="Staff"/>
        </div>
      </div>
      {/*right*/}
      <div className="w-full lg:w-1/3"></div>  
    </div>
  )
}

export default Adminpage