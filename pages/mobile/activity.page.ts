import Page from './page'


class ActivityPage extends Page {

    get tabAll() {return $('/hierarchy/android.widget.FrameLayout/android.widget.HorizontalScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView')}
    get tabSent() {return $('/hierarchy/android.widget.FrameLayout/android.widget.HorizontalScrollView[1]/android.view.ViewGroup[2]/android.widget.TextView')}
    get tabReceived() {return $('/hierarchy/android.widget.FrameLayout/android.widget.HorizontalScrollView[1]/android.view.ViewGroup[3]/android.widget.TextView')}
    get tabRequest() {return $('/hierarchy/android.widget.FrameLayout/android.widget.HorizontalScrollView[1]/android.view.ViewGroup[4]/android.widget.TextView')}

    get listItem() {return $('/hierarchy/android.widget.FrameLayout/android.widget.HorizontalScrollView[2]/android.widget.ScrollView/android.view.ViewGroup[2]')}

    async validate(): Promise<void> {
        (await this.tabAll).isDisplayed;
        (await this.tabReceived).isDisplayed;
        (await this.tabRequest).isDisplayed;
        (await this.tabSent).isDisplayed;
    }



}

export default new ActivityPage();