select
    count(distinct (owner)) as n_holders
from
    sui.sui_coins
where
    coin_type = '{{coin-type}}'
    and status = 'exists'
    and object_id like '{{object-id-prefix}}%';
