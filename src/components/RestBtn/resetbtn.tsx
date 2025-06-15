
import useFilter from '../../hooks/useFilterHook/usefilter';

function Resetbtn() {
  const { resetFilter }  = useFilter()
  return (
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
      onClick={() => {
        resetFilter();
      }}
    >
      Reset Filters
    </button>

  )
}

export default Resetbtn;
