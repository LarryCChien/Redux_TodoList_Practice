import React from 'react';
import FilterLink from '../containers/filterLink';

const Footer = () => (
    <p>
        Show: {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_CHECKED">
            Checked
        </FilterLink>
    </p>
);

export default Footer;