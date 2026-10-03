// import SubjectCard from '../../components/SubjectCard'
// import AttendanceCard from '../../components/AttendanceCard'
// import TaskCard from '../../components/TaskCard'
// import './Dashboard.css'

// function StudentInfo(props) {
//   return (
//     <div>
//       <p>Student: {props.name}</p>
//       <p>Semester: {props.semester}</p>
//     </div>
//   )
// }

// function Dashboard(props) {
//   return (
//     <div>
//       <h1>CampusFlow Dashboard</h1>
//       <p>Welcome to your student dashboard.</p>

//       <StudentInfo
//         name={props.name}
//         semester={props.semester}
//       />

//       <div className="dashboard-cards">
//         <SubjectCard total={6} />
//         <AttendanceCard percentage={82} />
//         <TaskCard pending={3} />
//       </div>
//     </div>
//   )
// }

// export default Dashboard
// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//     </div>
//   );
// }

// export default Dashboard;
import "./Dashboard.css";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import StatCard from "../../components/Dashboard/StatCard/StatCard";


function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Overview Cards */}
      <section className="overview">
        <StatCard number="12" title="Total Tasks" />
        <StatCard number="7" title="Completed" />
        <StatCard number="5" title="Pending" />
        <StatCard number="3" title="Due Soon" />
      </section>

    </div>
  );
}

export default Dashboard;