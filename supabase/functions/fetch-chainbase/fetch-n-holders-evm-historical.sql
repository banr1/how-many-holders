select
    date(bl.block_timestamp) as date,
    erc.contract_address as contract,
    count(erc.wallet_address) as n_holders
from
    ethereum.erc20_balances_historical erc
    left join ethereum.blocks bl on erc.block_number = bl.block_number
group by
    1,
    2
order by
    date desc,
    n_holders desc
limit
    100;
