/** @jsx jsx */
import { jsx,  Flex, Box } from 'theme-ui';
import Card from './card';

const CardList = ({cards}) => {
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
    {cards.map(card => (
      <Box key={card} sx={{ width: ['100%', '50%', '33.33%'] }}>
        <Card />
      </Box>
    ))}
  </Flex>
  )
}

export default CardList
