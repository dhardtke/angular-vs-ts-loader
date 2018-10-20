import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub330Component} from "./stub330.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub330Component
        }])
    ],
    declarations: [
        Stub330Component
    ]
})
export class Stub330Module {

}
