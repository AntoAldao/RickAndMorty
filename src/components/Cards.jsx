import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((character) => {
         return <Card
            name={character.name}
            image={character.image}
            species={character.species}
            gender={character.gender}
            onClose={props.onClose} />
      })}
            
   </div>;
}
