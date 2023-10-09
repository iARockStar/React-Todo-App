import { findByLabelText } from '@testing-library/react';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Plusimg from "./Plus.png";
import Check from "./Check.png";
import Delete from "./Delete.png";

const MainDiv = () => {
  
 
  const [newtask,setnewTask]=useState("  add new task");
  const inputeRef =useRef(null);
  const date = new Date();
    const showTime = date.getHours()
        + ':'+date.getMinutes() +'  -  '+ date.toLocaleDateString('en-En',{  month: 'short', day: 'numeric' });
  const[tasks,settasks]=useState(()=>{
    const data =localStorage.getItem("ITEMS")
    if (data==null) return []
    return JSON.parse(data)
  });
  useEffect (()=>{
    localStorage.setItem("ITEMS",JSON.stringify(tasks))
  },[tasks])
  function toggle(id){
    console.log(id)
    settasks(currenttasks =>
      currenttasks?.map(task =>{
        if(task.id==id){
          console.log('hello')
       return {...task,completed:!task.completed}
        }
        else
        return task
      })
    )
  }
  console.log(tasks)
  
  function handleSubmit(title){
    console.log(inputeRef.current.value)
    settasks(currtasks=>[ {id: crypto.randomUUID(),title, completed:false, showTime},...currtasks])
    inputeRef.current.value=""
  }
  function del(id){
    settasks(currenttasks=>{
      return currenttasks.filter(task => task.id!=id)
    })
  }
    const styles = {
        maindiv: {
            fontSize: "18px",
            color: "black",
            backgroundColor: "whiteSmoke",
            padding: "0 20px",
            boxShadow: "1px 16px 88px -4px rgba(0,0,0,0.78)",           
            width: "55%",
            height: "88%",
            borderRadius: "6%",
            overflow:"hidden",
            display:"flex",
            flexDirection:"column",
        },
            title: {
              color:"#201859",
              opacity:"80%",
            
            },
            date: {
                opacity: "50%",
                display: "flex",
                justifyContent: "center",
                marginTop: "28px",
              
            },
            line: {
              borderBottom: "1px solid #201859",
              opacity: "40%",
              padding: "0",
              margin: "0",
              width: "100%"
            },
           
            input:{
              height: "40px",
              width: "80%",
              backgroundColor:"whiteSmoke",
              border:"0px",
              margin:"0px",
              padding:"0px",
              borderRadius: '10px', 
              overflow: 'hidden',
              borderColor:"#7379EA",
              borderWidth: "1",
              border: "3px solid rgb(115,121,234,0.4)",
              paddingLeft:"10px",
              
            },
            addDiv:{
              display:"flex",
              flexDirection:"column",
              justifyContent:"end",
              alignItems:"center",
              marginBottom:"10px"
            },
         
          
            checkimg:{
              marginRight:"50px",
            },
            delete:{
          
              height: "26px",
              width: "26px",
              backgroundColor:"rgb(115, 121, 234, 0.005)",
              border:"0px",
              borderRadius: '20px', 
              overflow: 'hidden',
              // boxShadow: "-2px 6px 20px -2px rgba(115,121,234,0.75)"
  
            },
            alltask:{
              overflowY:"scroll",
              height:"60%",
              display:"flex",
              flexDirection:"column",
             
              
            },
         
            secdiv:{
              height:"80%"
            },
            towbotton:{
    
              display:"flex",
             
            },
            checkimg:{
             marginRight:"28px",
             position:"absolute",
             left:"28%",
            },
  

          
          
         
          // towbotton:{
          //   display:"flex",
          // }
    };
    return(
     <div style={styles.maindiv}>
      <div style={styles.secdiv}>
         <h2 style={styles.title}>My Tasks</h2>
         <h1></h1> <div style={styles.line}></div>
         <div style={styles.date} >{new Date().toLocaleDateString('en-En',{ year: 'numeric', month: 'long', day: 'numeric' })}</div>
         <ul style={styles.alltask}>
          {tasks.map(task=>{
            return(
              <div className='task' key={task.id}>
                <div className='taskrow'>
                <div className='checkandtilte'>
                <button className='checkbox'type='submit' onClick={()=>toggle(task.id)}>
                  {
                    !task.completed?(<div></div>):( <img style={styles.checkimg} width="9px"  height="9px"src={Check}/>)
                  }
            
                </button>
                <label>
                {task.title}
                </label>
                </div>
            
                <button style={styles.delete}  onClick={()=>del(task.id)} >
                  {
                  ( <img  width="11px" height="14.5x"src={Delete}/>)
                  }
            
                </button>
            
                </div>
                <p className='task-time' align="center"> {task.showTime}</p>
                
                {/* <input style={styles.checkbox} type="checkbox" /> */}
              </div>
            );
          })}
         </ul>
      </div>
     <div style={styles.addDiv}>
          <input ref={inputeRef} placeholder="add a task" style={styles.input}  type="text" />
          <button type='submit'className='plusButton' onClick={newtask=>handleSubmit(inputeRef.current.value)}><img width="15px" height="15px"src={Plusimg}/></button>
     </div>
  
     </div>
    );
};

export default MainDiv;