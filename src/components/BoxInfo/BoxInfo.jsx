import './BoxInfo.css'


const BoxInfo = ({ Icon ,BoxTitle ,BoxSubTitle  }) => {
  return (
    <div className='AB_BoxInfo'>
        <div className='AB_ItemBox'>
            <img src={Icon} alt="Icon Info" />
            <div className='AB_ItemInfoo'>
              <h6 className='AB_TitleBox'>{BoxTitle}<br></br>
              <span className='AB_SubTitleBox'>{BoxSubTitle}</span></h6>
            </div>
        </div>

    </div>
  )
}

export default BoxInfo