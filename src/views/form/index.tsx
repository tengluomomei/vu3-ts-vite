import('./index.less');
import { defineComponent} from 'vue';
import { useRouter } from 'vue-router';
import { NoticeBar } from 'vant';

export default defineComponent({
  name: 'FormPage',
  props: {
  },
  setup(props) {
    const router = useRouter();

    const HistoryCard = ()=>{
      return (
        <div>
          <h1>历史牌框</h1>
        </div>
      )
    }

    return () => (
      <div class={'cardframe-form-page'}>
          <NoticeBar mode='closeable' class={'notice mt-14px text-center'}>
            为了展示更好的卡牌效果，建议合理控制字数
          </NoticeBar>
          <HistoryCard/>
      </div>
    );
  },
});
