import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as post from './postPreview'
import * as tag from './tag'
import * as utils from './utils'

const StyledPostPreviewHeader = styled.div`
    dispaly: table;
    border-spacing: 10px;
`

const StyledPreviewHeaderOuterCell = styled.div`
    display: table-cell;
    width: 20%;
`

const StyledPreviewHeaderMiddleCell = styled.div`
    display: table-cell;
    width: 60%;
`

export const PostPreviewHeader = ({ post: { user: { name, image, userLink }, tags, created } }) => {
  return (
    <StyledPostPreviewHeader>
        <StyledPreviewHeaderOuterCell>
            <post.PostPreviewAuthor name={name} image={image} userLink={userLink}/>
        </StyledPreviewHeaderOuterCell>
        <StyledPreviewHeaderMiddleCell>
            <tag.Tags tags={tags}/>
        </StyledPreviewHeaderMiddleCell>
        <StyledPreviewHeaderOuterCell>
            <utils.PostCreatedDate>{created}</utils.PostCreatedDate>
        </StyledPreviewHeaderOuterCell>
    </StyledPostPreviewHeader>
  )
}

PostPreviewHeader.propTypes = {
  post: PropTypes.shape({
    created: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      userLink: PropTypes.string
    }),
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      href: PropTypes.string
    }))
  })
}
