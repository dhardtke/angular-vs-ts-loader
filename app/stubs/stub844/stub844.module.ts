import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub844Component} from "./stub844.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub844Component
        }])
    ],
    declarations: [
        Stub844Component
    ]
})
export class Stub844Module {

}
