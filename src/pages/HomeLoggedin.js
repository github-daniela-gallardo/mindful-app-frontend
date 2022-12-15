import notebookimg from '../images/notebooknoBackground.png'
import meditateimg from '../images/meditate.jpg'

const HomeLoggedin = () => {


    return (

        <div>
            <h2 className="title"> Welcome </h2>

            <div className='homeCards'>
                <div>
                    <img className="meditateimg" src={meditateimg} alt='meditateimg' />
                    <h4>Mediate now</h4>
                </div>

                <div>
                    
                        <img className="notebookimg" src={notebookimg} alt='meditateimg' />
                    
                    <div>
                        <h4>My journal</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeLoggedin;
