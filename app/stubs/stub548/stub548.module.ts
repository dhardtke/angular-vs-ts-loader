import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub548Component} from "./stub548.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub548Component
        }])
    ],
    declarations: [
        Stub548Component
    ]
})
export class Stub548Module {

}
