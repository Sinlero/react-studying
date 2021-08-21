import React from "react";
import style from "./User.module.css";
import axios from "axios";
import reactLogo from "../../../avatars/reactLogo.png";
// import Pagination from 'react-bootstrap/Pagination'
// import Button from 'react-bootstrap/Button';
import Button from "@material-ui/core/Button";


class UserClass extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:8081/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCounts(response.data.totalRecords);

        });
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8081/users?page=${pageNumber}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
        });
    }

    // paging = () => {
    //     let active = 2;
    //     let items = [];
    //     for (let number = 1; number <= 5; number++) {
    //         items.push(
    //             <Pagination.Item key={number} active={number === active}>
    //                 {number}
    //             </Pagination.Item>,
    //         );
    //     }
    //     return (
    //         <div>
    //             <Pagination size="sm">{items}</Pagination>
    //             <Button variant="primary">Primary</Button>{' '}
    //         </div>
    //     )
    // }

    render() {
        let pagesCount = Math.ceil(this.props.totalRecords / this.props.pageSize);
        // let pages = [];
        //
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }
        return (
            <div>
                {/*{this.paging()}*/}
                {/*<div className={style.pages}>*/}
                {/*    {pages.map(page => {*/}
                {/*            return <span className={this.props.currentPage === page ? style.selectedPage : style.page}*/}
                {/*                         onClick={(event => {this.onPageClick(page)})}>{page}</span>*/}
                {/*        }*/}
                {/*    )}*/}
                {/*</div>*/}
                {this.props.users.map(user =>
                    <div className={style.usersItem} key={user.id}>
                        <div className={style.avatar}>
                            <img src={user.photos !== null ? user.photos : reactLogo} alt="ava"/>
                        </div>
                        <div>Status: {user.status}</div>
                        <div>{user.name}</div>
                        <div>{"user.location.city"}</div>
                        <div>
                            {/*{user.followed*/}
                            {/*    ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>*/}
                            {/*    : <button onClick={() => this.props.follow(user.id)}>Follow</button>}*/}
                            {user.followed
                                ? <Button variant="outlined" size={"small"}  style={{color: "#61dafb"}} onClick={() => this.props.unfollow(user.id)} value="Unfollow">Unfollow</Button>
                                : <Button variant="outlined" size={"small"} style={{color: "#61dafb"}} onClick={() => this.props.follow(user.id)} value="Follow">Follow</Button>}
                        </div>
                        <div>{"user.location.country"}</div>

                    </div>)}
            </div>)
    }
}

export default UserClass;