import React,{Component} from 'react'
import readXlsxFile from 'read-excel-file'
import Table from './Table/Table'
import Modal from './../src/Modal/Modal'
// import logo from './logo.svg'

class App extends Component{

  state={
    excelData:[],
    img: [],
    modal: false,
    modalImg: ''
  }

openModal=(url,e)=>{
  this.setState({
    modal: !this.state.modal,
    modalImg: url
  })
}

addImage=(jsonData, size)=>{
  
jsonData= jsonData.map((sub,i)=>{
  sub.image= (<img src={this.state.img[i]} alt={sub.name} 
    style={{width: `${size}px`, height: `${size}px`, borderRadius: '50%'}} 
    onClick={this.openModal.bind(this, this.state.img[i])}/>)

  return sub
})
return jsonData
}


componentDidMount=()=>{
  let img= []
  for(let i=0; i<=30; i++)
  {
    fetch(`https://source.unsplash.com/500x${500+i}/?person,face/`)
  .then(res=>{
    img.push(res.url)
  })
  }
this.setState({
  img: img
})

}

  readExcel=(event)=>{
    let jsonData;
    readXlsxFile(event.target.files[0]).then((rows)=>{
      rows.shift()
     jsonData= rows.map((sub,i)=>{     
      return{
         name: sub[0],
         gender: sub[1],
         class: sub[2],
         home: sub[3],
         major: sub[4],
         activity: sub[5],
      }
       
     })

     this.addImage(jsonData, 100)
     
      this.setState({
        excelData: jsonData
      })

    })

  }

  render(){
    let table;
    if(this.state.excelData.length) table= <Table data={this.state.excelData}/>
    else table= null;

  return(
    <div>
      {this.state.modal?<Modal image={this.state.modalImg}/>: null}
      <input type="file" id="file_excel" onChange={this.readExcel}></input>
    {table}
    </div>
  )
}

}
export default App;
