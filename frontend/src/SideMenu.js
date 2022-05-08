import React from "react"
import "./css/SideMenu.css";
import axios from "axios";



export default class SideMenu extends React.Component{
    constructor(props){
        super(props);
      
        this.state={//All the teachers stores in a array
          username:"",
          userId:"",
          teachers:[],
          tId:""
        };
      } 
      
    
    componentDidMount(){
    this.setState({
    username:localStorage.getItem("name")
    }) 
    this.setState({
        userId:localStorage.getItem("userId")
        }) 
    

    this.retrieveTeachers();

    
    

    }
    retrieveTeachers(){
        axios.get("http://localhost:8091/AllTeachers")
        .then(res=>{
        if(res.data.success){
        this.setState({
          teachers:res.data.existingTeachers
        })
        console.log(this.state.teachers);
        
        }
        })
        }
        
    render(){
        return(
            <div style={{display:'flex'}}>
<section id="menu">
<div className="logo">
<img src={require('./images/logon.jpeg')} width="60px" height="60px"/>
<h2>Amzo Learning</h2>
</div>
<div className="items">
<li><i className="fa-solid fa-chart-pie"></i><a href="#">Dashboard</a></li>
<li><i className="fa-solid fa-person-chalkboard"></i><a href="/navTeacher">Teacher Management</a></li>
<li><i className="fa-solid fa-people-group"></i><a href="/studentDashboard">Student Management</a></li>
<<<<<<< HEAD
<li><i className="fa-solid fa-building-columns"></i><a href="/classhome">Class Management</a></li>
<li><i className="fa-solid fa-circle-question"></i><a href="#">Inquire Management</a></li>
<li><i className="fa-solid fa-note-sticky"></i><a href="#">Notice Management</a></li>
=======
<li><i className="fa-solid fa-building-columns"></i><a href="#">Class Management</a></li>
<li><i className="fa-solid fa-circle-question"></i><a href="/Student/AllInquiries">Inquire Management</a></li>
<li><i className="fa-solid fa-note-sticky"></i><a href="/Admin/AllNotices">Notice Management</a></li>
>>>>>>> cc0c5226afa1aec7322f3471e60c18b8f0d305bf
</div>

</section>

<section id="interface">
<div className="navigation">
    <div className="n1">
        <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search"></input>
        </div>
    </div>
    <div className="profile">
        <i className="far fa-bell"></i>



<<<<<<< HEAD

      <a href="/Admin/profile"><img src={require('./images/exam.jpg')} alt=""></img></a><span>{this.state.name}</span>
       &nbsp;
       <button onClick={localStorage.clear()} style={{background:"black",color:"white",borderRadius:"5px"}}>Logout</button>

=======
      <a href={`/teacher/${this.state.userId}`}><img src={require('./images/exam.jpg')} alt=""></img></a><span>{this.state.username}</span>
       
       
       

=======
>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
        <a href={`/teacher/${this.state.userId}`}><img src={require('./images/ppnn.jpg')} alt=""></img></a><span>{this.state.username}</span>
        <button onClick={()=>localStorage.clear()}>Logout</button>
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed
    </div>
</div>


</section>
</div>




        )
    }
}