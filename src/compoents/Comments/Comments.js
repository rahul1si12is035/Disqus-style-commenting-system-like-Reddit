
/*** Imports ***/

/* Library imports */
import React,{Component} from "react";
import PropTypes from 'prop-types';
import update from 'immutability-helper';


/* Component imports */
import Comment from "./component/Comment/Comment";

/* Style imports */

/*** End Imports ***/

class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            userId: 999,
          commentsList: [
              {
                  userId: 1,
                  userName: 'Rahul 1',
                  imagUrl: 'https://images.unsplash.com/photo-1558860360-02e231e9d947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  timeOfComment: 'Yesterday at 5: 42PM',
                  comment: "This is 1st comment",
                  commentId: '1',
                  subCommentsList: []
              },
              {
                  userId: 2,
                  userName: 'Rahul 2',
                  imagUrl: 'https://images.unsplash.com/photo-1558860360-02e231e9d947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  timeOfComment: 'Yesterday at 5: 42PM',
                  comment: "This is 2nd comment",
                  commentId: '2',
                  subCommentsList: [
                        {
                          userId: 3,
                          userName: 'Rahul 3',
                          imagUrl: 'https://images.unsplash.com/photo-1558904749-133e7de91569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                          timeOfComment: 'Today at 5: 42PM',
                          comment: "This is 3rd comment",
                          commentId: '3',
                          subCommentsList: [
                            {
                                  userId: 4,
                                  userName: 'Rahul 4',
                                  imagUrl: 'https://images.unsplash.com/photo-1558904749-133e7de91569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                                  timeOfComment: 'Today at 5: 42PM',
                                  comment: "This is 4th comment",
                                  commentId: '4',
                                  subCommentsList: [
                                    {
                                          userId: 5,
                                          userName: 'Rahul 5',
                                          imagUrl: 'https://images.unsplash.com/photo-1558904749-133e7de91569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                                          timeOfComment: 'Today at 5: 42PM',
                                          comment: "This is 5th comment",
                                          commentId: '5',
                                          subCommentsList: [
                                            {
                                                userId: 6,
                                                userName: 'Rahul 6',
                                                imagUrl: 'https://images.unsplash.com/photo-1558904749-133e7de91569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                                                timeOfComment: 'Today at 5: 42PM',
                                                comment: "This is 6th comment",
                                                commentId: '6',
                                            }
                                          ]
                                    }
                                  ]
                            }
                          ]
                        }
                    ]
              },
              {
                  userId: 7,
                  userName: 'Rahul Kumar 7',
                  imagUrl: 'https://images.unsplash.com/photo-1558860360-02e231e9d947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  timeOfComment: 'Yesterday at 5: 42PM',
                  comment: "This is 7th comment",
                  commentId: '7',
              },
          ]
        };
        this.currentUserId = 999;
        this.nextCommentId = 10;
        this.currentUserName = "Current User";
    }

    componentWillMount(){

    }

    componentDidMount(){
    }

    // Server calls

    // helper function

    // listeners

    addComment = (value, superIndex, commentId) => {
        let obj = {
            userId: this.currentUserId,
            userName: this.currentUserName,
            imagUrl: 'https://images.unsplash.com/photo-1558904749-133e7de91569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            timeOfComment: 'Today at 5: 42PM',
            comment: value,
            commentId: this.nextCommentId,
        };
        // we need to setState here
        
        // const newCommentsList = update(this.state.commentsList, {superIndex: {subCommentsList: {0: {subCommentsList: {$splice: [[1, 0, obj]]}}}}});
        // this.setState({
        //     commentsList: newCommentsList
        // });
    };

    

    // views to be rendered
    getCommentList = () => {
        return this.state.commentsList.map((comment, index) => {
            return <Comment 
                        key = {index} 
                        superIndex = {index}
                        commentId = {comment.commentId}
                        comment = {comment} 
                        children = {comment.subCommentsList}
                        addComment = {this.addComment}
                    />;
        });
    };


    //finally render
    render(){
        return (
            <div>
                <div>Comments</div>
                <hr />
                {
                    this.getCommentList()
                }
            </div>
        );
    }

}

/**
 * all prop types which can be passed to this component
 */
Comments.propTypes ={

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Comments.defaultProps ={

};

export default Comments;