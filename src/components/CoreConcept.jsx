export function CoreConcept(props) {
    console.log('props ', props)
    return (
      <li>
        <img src={props.image} alt="..."/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
  }