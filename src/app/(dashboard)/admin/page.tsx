import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import FinanceChart from "@/components/FinanceChart"
import EventCalendar from "@/components/EventCalendar"
import Announcements from "@/components/Announcements"

const Adminpage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/*Left*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/*UserCards*/}
        <div className="flex flex-wrap gap-4 justify-between">
          <UserCard type="Student"/>
          <UserCard type="Teacher"/>
          <UserCard type="Parent"/>
          <UserCard type="Staff"/>
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>
        {/* bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      {/*right*/}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcements/>
      </div> 
    </div>
  )
}

export default Adminpage