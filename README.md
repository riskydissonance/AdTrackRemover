# AdTrackRemover
Removes the middle tracking links from popular sites such as facebook and just replaces it with the actual destination.


## Supported sites
Facebook

## Note
This is still very much a WIP. I'd like to expand it for other popular sites but we'll see.

## Implementation

This just works by checking for links on the supported sites for common redirection parameters such as ?u= or ?redir=, and then just replacing the URL with the target instead.
