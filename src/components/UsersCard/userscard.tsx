import React from "react";
import styles from './userscard.module.scss'

interface users {
  name: string,
  image: string,
}


const UserCard: React.FC<users> = ({name = '', image = ''}) => {
  return (
    <div className={styles.userCardContainer}>
      <figure>
        <img src={image} alt="users" />
      </figure>
      <span>{name}</span>
      <button
        style={{
          margin: '1rem 0',
          padding: '8px 16px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      // onClick={() => {
      //   resetFilter();
      // }}
      >
        Follow
      </button>
    </div>
  )

};

export default UserCard;