const React = require('react');

class Index extends React.Component {
    render() {
        const { todo } = this.props;
        return (
            <html>
                <body>
                    <h1> TO DO LIST</h1>

                    { todo <= 0 ? <h3> There are no To Dos yet!</h3> : <ul> {todo.map((item, i) => {
                            return(
                                <li>
                                    {`${item.name} - ${item.complete ? 'Not Done' : 'Done'}`}

                                    <form action={`/todolist/${item._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </li>
                            )
                        })}
                        </ul>
                    }
                    <hr/>
                    <form action = "todolist" method="POST">
                        <input type="text" name="name"/>
                        <input type="submit" name="" value="ADD TO DO" />
                    </form>                        
                </body>
            </html>
            )
        }
    }


module.exports = Index;
