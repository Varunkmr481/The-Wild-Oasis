import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  // A convenient wrapper for reading and writing search parameters via the URLSearchParams interface.
  // url m state update => component re-R
  const [searchParams, setSearchParams] = useSearchParams();

  // filterField : 'discount', value : 'all', 'with-discount', 'no-discount'
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    // searchParams object ke andar value ko update karta hai
    searchParams.set(filterField, value);
    // updated searchParams object ko URL mein push karta hai
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          active={option.value === currentFilter ? "active" : ""}
          disabled={option.value === currentFilter}
          onClick={() => handleClick(option.value)}
          key={option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
