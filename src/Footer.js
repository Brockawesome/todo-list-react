import React from 'react';

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'antiquewhite',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

const filterLink = ( current, name, setFilter) => {
  if (current === name)
    return <span>{name}</span>
    else
    return <span style={styles.link} onClick={ () => setFilter(name)}> {name}</span>
}

const Footer = ({ filter, setFilter }) => (
  <footer>
    {['All', 'Active', 'Complete'].map( f => filterLink(filter, f, setFilter))}
  </footer>
)

export default Footer
