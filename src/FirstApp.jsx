import PropTypes from 'prop-types';

export const FirstApp = ({ title, description }) => {

    return (
        <>
            <h1>{ title }</h1>
            {/* <p>{ description }</p> */}
        </>
    )

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
}