import React from 'react';
import CheckboxWithLabel from '../Checkbox/checkboxwithlabel';
import Skimmer from '../Skimmer/skimmer';
import styles from './category.module.scss';
import useFilter from '../../hooks/useFilterHook/usefilter';

interface CKList {
  label: string;
  isError: boolean;
  list: string[];
  isLoading?: boolean;
}

const CategoryListAndKeyWords: React.FC<CKList> = ({
  isError,
  list = [],
  isLoading,
  label
}) => {
  const { updateCategories, filter, updateKeywords } = useFilter();
  const { categories, keywords } = filter;
  const listValue = label === "Categories" ? categories : keywords;
  const handleCheckCategoriesList = (val: string) => {
    if(label === "Categories") {
      updateCategories(val)
    } else {
      updateKeywords(val)
    }
  };

  return (
    <>
      {!isError && (
        <section>
          {label && <h2 className={styles.label}>{label}</h2>}
          <div className={styles.catgeoryList}>
            {list.length > 0 ? (
              list.map((val: string, index: number) => (
                <CheckboxWithLabel
                  key={index}
                  onChange={() => handleCheckCategoriesList(val)}
                  label={val}
                  checked={listValue.includes(val)} // TODO: pass actual checked logic here
                />
              ))
            ) : (
              !isLoading && <p>No items found.</p>
            )}
          </div>
        </section>
      )}

      {isLoading &&
        Array.from({ length: 5 }).map((_, i) => (
          <Skimmer key={i} height={10} />
        ))}
    </>
  );
};

export default CategoryListAndKeyWords;
