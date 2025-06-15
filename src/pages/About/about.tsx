import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)}>back</div>
  )
}

export default About