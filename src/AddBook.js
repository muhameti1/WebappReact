import React,{Component} from 'react';
import { Authors } from './Author.js';
import {variables} from './variables.js';

export class AddBook extends Component{

    constructor(props){
        super(props);

        this.state={
            departments:[],
            employees:[],
            books:[],
            authors:[],
            modalTitle:'',
            title:'',
            id: 0,
            authors:'',
            publishedDate:''
        }
    }

    refreshList(){

        fetch(variables.API_URL+'addbooks')
        .then(response=>response.json())
        .then(data=>{
            this.setState({books:data});
        });

        fetch(variables.API_URL+'authors')
        .then(response=>response.json())
        .then(data=>{
            this.setState({authors:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeTitle =(e)=>{
        this.setState({title:e.target.value});
    }
    changeAuthor =(e)=>{
        this.setState({author:e.target.value});
    }
    changeGenre =(e)=>{
        this.setState({genre:e.target.value});
    }
    changePublishedDate =(e)=>{
        this.setState({publishedDate:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Book",
            id:0,
            title:"",
            author:"",
            genre:'',
            publishedDate:""
           
        });
    }
    editClick(book){
        this.setState({
            modalTitle:"Edit Book",
            id:book.id,
            title:book.title,
            author:book.author,
            publishedDate:book.publishedDate
        });
    }

    createClick(){
        fetch(variables.API_URL+'addbooks/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:this.state.title,
                author:this.state.author,
                genre:this.state.genre,
                publishedDate:this.state.publishedDate
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(id){
        fetch(variables.API_URL+'addbooks/'+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:this.state.id,
                title:this.state.title,
                author:this.state.author,
                publishedDate:this.state.publishedDate
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'addbooks/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    

    render(){
        const {
            departments,
            employees,
            authors,
            books,
            title,
            modalTitle,
            id,
            author,
            genre,
            publishedDate
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Book
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            Id
        </th>
        <th>
            Title
        </th>
        <th>
            Author
        </th>
        <th>
            Genre
        </th>
        <th>
            Published Date
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {books.map((book, i)=>
            <tr key={i}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>    
                <td>{book.publishedDate}</td>         
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(book)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(book.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Book Title</span>
            <input type="text" className="form-control"
            value={title}
            onChange={this.changeTitle}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Author</span>
            <input type='text' className='form-control' 
            value={author} 
            onChange={this.changeAuthor}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Genre</span>
            <input type="text" className="form-control"
            value={genre}
            onChange={this.changeGenre}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Published Date</span>
            <input type="date" className="form-control"
            value={publishedDate}
            onChange={this.changePublishedDate}/>
        </div>


     </div>
    
    </div>

    {id===0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {id!==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>


</div>
        )
    }
}