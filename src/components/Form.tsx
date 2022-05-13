import React from 'react'
 
class Form  extends React.Component <any, any>{
  constructor(props:any) {
    super(props);
    this.state = {
      item:"",
      DataisLoaded: false,
      isHidden: true
  };
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

DESCONECTAR = (event:any) => {  
  try{
    fetch('http://localhost:8080/logout').then((res) => res.json()).then((json) => {
      console.log(json);
      this.setState({item:json});
    })
    this.setState({item:"Ah sido desconectado del servidor"});
    this.toggleHidden();
    
  }
  catch (err) { console.error('err', err);}
 
}
 
  handleChange = (event:any) => {
    this.setState({[event.target.name]: event.target.value});
  }

   Child = () => (
    <button onClick={this.DESCONECTAR}>DESCONECTAR</button>
    )
 
  handleSubmit = (event:any) => {
    try{
    fetch('http://localhost:8080/?name='+event.target.elements.name.value).then((res) => res.json())
    .then((json) => {
      console.log(json);
      this.setState({item:json.hola});
    })
    event.preventDefault();
    }
    catch (err) {
      console.error('err', err);
    }
}
 
  render() {
    return (

      <div>
        <p>{this.state.item}</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name"/>
        </label>
        <input type="submit" value="Submit" onClick={this.toggleHidden.bind(this) }/>
      </form>
      {!this.state.isHidden && <this.Child/>}

      </div>
    );
  }

}
 
export default Form;