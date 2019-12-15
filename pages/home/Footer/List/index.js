import List from './styled';

export default ({ list }) =>
    <List>
        <List.Head>{list.title.toUpperCase()}</List.Head>
        {list.content && list.content.map((item, id) => <List.Content key={id}>{item.toUpperCase()}</List.Content>)}

    </List> 