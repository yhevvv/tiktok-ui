import Header from '~/Components/Layout/Components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className='container'></div>
            <div className='content'>
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;
