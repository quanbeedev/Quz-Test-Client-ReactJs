import { Component } from 'react'
import ItemUser from '../ListItem'
import { connect } from "react-redux"
class ListUser extends Component{
   showUserItem(){
       const { users } = this.props
       let xhtml = '';
       xhtml = users.map(element =>{
        return <ItemUser element={element} key={element.id}/>
    })
    return xhtml
   }

    render(){
        return(
            <div className="column right">
                    <table className="table">
                            <thead>
                                <th>User</th>
                                <th>Score</th>
                            </thead>
                            {this.showUserItem()}
                    </table>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        users : state.users
    }
}
export default connect(mapStateToProps,null)(ListUser);